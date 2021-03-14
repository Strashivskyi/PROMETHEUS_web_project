import ProgramEditable from './ProgramEditable'
import ProgramOnlyView from './ProgramOnlyView'

export default function RenderProgram() {
    if (localStorage.getItem('proffesion') == 'Therapists') {
        return <ProgramOnlyView />
    } else {
        return <ProgramEditable />
    }
}
