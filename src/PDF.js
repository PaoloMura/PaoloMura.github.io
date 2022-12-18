
function PDF(props) {
    return (
        // <Document file="/Paolo-Mura-CV.pdf" imageResourcesPath='/public/images/'/>
        <div className='cv-container'>
            <object data={props.link} type='application/pdf' width='100%' height='650'>
                <p>
                    Alternative 
                    <a href={props.link}>
                        link to the PDF
                    </a>
                </p>
            </object>
        </div>
    );
}

export default PDF;
