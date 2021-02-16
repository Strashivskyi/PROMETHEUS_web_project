
const xlsx = require('xlsx');
const path = require('path');

const exportExcel = (data, workSheetColumnNames, workSheetName, filePath) => {
    const workBook = xlsx.utils.book_new();
    const workSheetData = [
        workSheetColumnNames,
        ... data
    ];
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    xlsx.writeFile(workBook, path.resolve(filePath));
}


const exportUsersToExcel = (users, workSheetColumnNames, workSheetName, filePath,protocols) => {

    
for (let i = 0; i <protocols.length; i += 1) {
    users[i].text1=protocols[i].SphereOfDevelopment+"."+protocols[i].Skill
    users[i].instr1=protocols[i].Instructions1
    users[i].instr2=protocols[i].Instructions2
    users[i].instr3=protocols[i].Instructions3
    if (protocols[i].IsActive == true) {
        users[i].bool_field="1"
    }
    else {
        users[i].bool_field="0"
    }
    console.log(protocols[i])
    
};

    const data = users.map(user => {
        return [user.id, user.text1, user.text2, user.text3, user.stym[0], user.stym[1], user.stym[2], user.stym[3], user.stym[4],
        user.stym[5], user.stym[6],user.stym[7], user.stym[8], user.instr1, user.k, user.l, user.m, user.n, user.o, user.p,
            user.q, user.r, user.s, user.instr2, user.u, user.v, user.w, user.x, user.y, user.z, user.aa, user.ab,
            user.ac, user.instr3, user.ae, user.af, user.ag, user.ah, user.ai, user.aj, user.ak, user.al, user.am,
            user.bool_field];
    });
    exportExcel(data, workSheetColumnNames, workSheetName, filePath);
}

module.exports = exportUsersToExcel;