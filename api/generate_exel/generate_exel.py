import datetime
import xlsxwriter
# from pprint import pprint
# from firestore_protocol_data import firestore_get_protocol_data


def create_xlsx(filename, db_data_list):
    workbook = xlsxwriter.Workbook(filename)

    for protocol_data in db_data_list:
        protocol_id = str(protocol_data.get("ProtocolId"))
        protocol_first_name = protocol_data.get("SphereOfDevelopment")
        protocol_last_name = protocol_data.get("Skill")
        worksheet = workbook.add_worksheet(f"Протокол {protocol_id}")
        worksheet.set_column('A:B', 50)

        # cell_format = workbook.add_format()
        # cell_format.set_bg_color('green')
        # worksheet.write('A1', 'Ray', cell_format)
        # worksheet.conditional_format('A1:A2', {'bold': True})
        bold_border = workbook.add_format({"top": 1})
        # bold_border.set_left(1)

        worksheet.write('A1', 'Версія програми від', bold_border)
        worksheet.write('B1', datetime.date.today().strftime("%d/%m/%Y"))
        worksheet.write('A2', 'Супервізор')
        worksheet.write('B2', protocol_data.get("TherapistNameSurname"))
        worksheet.write('A3', "Дитина")
        worksheet.write('B3', protocol_data.get("PatientName"))

        bold_title_format = workbook.add_format({
            'bold': 1,
            'border': 1,
            'align': 'center',
            'valign': 'vcenter',
            'fg_color': 'yellow'})

        merge_format = workbook.add_format({
            'align': 'center',
            'valign': 'vcenter'
        })

        format_bg_active = workbook.add_format({
            'fg_color': '#E2EFDA'
        })
        format_bg_not_active = workbook.add_format({
            'fg_color': '#FFF2CC'
        })
        format_bg_error = workbook.add_format({
            'fg_color': '#FF3B3B'
        })

        worksheet.merge_range('A6:B6', f"Протокол {protocol_id}. {protocol_first_name}. {protocol_last_name}",
                              merge_format)
        worksheet.write('A7', 'Статус')

        if protocol_data.get("IsActive") == "0":
            worksheet.write('B7', 'Неактивний', format_bg_not_active)
        elif protocol_data.get("IsActive") == "1":
            worksheet.write('B7', 'Активний', format_bg_active)
        else:
            worksheet.write('B7', 'None', format_bg_error)

        worksheet.write('A8', 'Сфера розвитку')
        worksheet.write('B8', protocol_data.get("SphereOfDevelopment"))

        worksheet.write('A9', 'Навик')
        worksheet.write('B9', protocol_data.get("Skill"))
        worksheet.write('A10', 'Метод')
        worksheet.write('A10', protocol_data.get("Method"))

        cell_format = workbook.add_format()
        cell_format.set_text_wrap()
        worksheet.write('A11', 'Бажана реакція')
        worksheet.write('B11', protocol_data.get("DesirableReaction"), cell_format)

        worksheet.write('A12', 'Критерій узагальнення навику')
        worksheet.write('B12', protocol_data.get("CriteriongenGenerSkill"), cell_format)

        worksheet.write('A13', 'Рівні інтенсивності підказки')
        worksheet.write('B13', str(protocol_data.get("Interval") + ' сек.'))

        worksheet.write('A14', 'Критерій зниження рівня інтенсивності підказки')
        worksheet.write('B14', protocol_data.get("ReductionСriterion"), cell_format)

        worksheet.write('A15', 'Критерій підвищення рівня інтенсивності підказки')
        worksheet.write('B15', protocol_data.get("CriterionIncrease"), cell_format)

        worksheet.write('A15', 'Спосіб забирання підказки')
        worksheet.write('B15', protocol_data.get("MethodTakingHint"), cell_format)

        last_row = 16
        stimulus_list = protocol_data.get("StimulusList")
        if len(stimulus_list) <= 1:
            worksheet.write('A16', 'Спосіб забирання підказки')
            worksheet.write('B16', ''.join(str(e) for e in stimulus_list))
        else:
            range_stimulus = f'A{last_row}:A{last_row + (len(stimulus_list) - 1)}'
            worksheet.merge_range(range_stimulus, 'Стимули до етапів', merge_format)

        for stimulus in range(len(stimulus_list)):
            worksheet.write(f'B{last_row}', str(stimulus_list[stimulus]))
            last_row += 1

        # last_row += 1
        worksheet.write(f"A{last_row}", "Опис етапів")
        worksheet.write(f"B{last_row}", protocol_data.get("StepDescription"), cell_format)

        # !-- Етапи протоколу --
        last_row += 3
        worksheet.merge_range(f"A{last_row}:B{last_row}", 'Етапи протоколу', merge_format)

        last_row += 1
        worksheet.write(f"A{last_row}", "Етап 1")
        worksheet.write(f"B{last_row}", protocol_data.get("Instructions1"), cell_format)
        last_row += 1
        worksheet.write(f"A{last_row}", "Процедура корекції неправильної відповіді:")
        worksheet.write(f"B{last_row}", protocol_data.get("CorrectionProcedureStep1"), cell_format)

        last_row += 1
        worksheet.write(f"A{last_row}", "Етап 2")
        worksheet.write(f"B{last_row}", protocol_data.get("Instructions2"), cell_format)
        last_row += 1
        worksheet.write(f"A{last_row}", "Процедура корекції неправильної відповіді:")
        worksheet.write(f"B{last_row}", protocol_data.get("CorrectionProcedureStep2"), cell_format)

        last_row += 1
        worksheet.write(f"A{last_row}", "Етап 3")
        worksheet.write(f"B{last_row}", protocol_data.get("Instructions3"), cell_format)
        last_row += 1
        worksheet.write(f"A{last_row}", "Процедура корекції неправильної відповіді:")
        worksheet.write(f"B{last_row}", protocol_data.get("CorrectionProcedureStep3"), cell_format)

    workbook.close()


# if __name__ == '__main__':
#     data = firestore_get_protocol_data("m0nitor2048@gmail.com", "dFpC2e42XjBFZk6bHa82")
#     create_xlsx("filename.xlsx", data)
#     pprint(data)


