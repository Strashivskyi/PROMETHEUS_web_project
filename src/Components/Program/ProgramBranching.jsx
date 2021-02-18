import ProgramEditable from './ProgramEditable'
import ProgramOnlyView from './ProgramOnlyView'

export default function RenderProgram() {
    if (localStorage.getItem('proffesion') == 'therapist') {
        return <ProgramOnlyView />
    } else {
        return <ProgramEditable />
    }
}
