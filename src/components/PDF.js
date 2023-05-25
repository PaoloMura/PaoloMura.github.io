
function PDF({ link }) {
    return (
        // <Document file="/Paolo-Mura-CV.pdf" imageResourcesPath='/public/images/'/>
        <div className='cv-container'>
            <object data={link} type='application/pdf' width='100%' height='650'>
                <p>
                    Alternative
                    <a href={link}>
                        link to the PDF
                    </a>
                </p>
            </object>
        </div>
    );
}

export default PDF;
