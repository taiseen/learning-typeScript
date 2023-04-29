type SubjectProps = {
    mainSubject: string
    extraSubject?: string // <=== this prop is optional
}

const Subject = (props: SubjectProps) => {

    const { mainSubject, extraSubject = 'Not Define Yet...' } = props;

    return (
        <div>
            My main subject is {mainSubject} &
            extra subject is {extraSubject}
        </div>
    )
}

export default Subject