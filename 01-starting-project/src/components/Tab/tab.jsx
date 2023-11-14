export default function Tab({children, buttons, Container ="menu"}){

    return <>
    <Container>
        {buttons}
    </Container>
    {children}
    </>
}