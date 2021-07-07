import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="foreground">
                <div className="top-container">
                    <h1>Contact</h1>
                    <p className="subtitle">get in touch</p>
                </div>

                <div>
                    <ul className="contact-list-grid">
                        <li className="contact-list-item"><a className="contact-list-link" href="mailto:joninvermont@gmail.com"><img className="contact-list-image" src="https://image.flaticon.com/icons/svg/732/732200.svg" alt="gmail"></img><span class="contact-media-label">joninvermont@gmail.com</span></a></li>
                        <li className="contact-list-item"><a className="contact-list-link" href="https://www.linkedin.com/in/jonathan-russell-76a0ab71/"><img className="contact-list-image" src="https://image.flaticon.com/icons/svg/2111/2111499.svg" alt="linked in"></img><span class="contact-media-label">LinkedIn</span></a></li>
                        <li className="contact-list-item"><a className="contact-list-link" href="https://github.com/JonChamplain"><img className="contact-list-image" src="https://image.flaticon.com/icons/svg/733/733553.svg" alt="GitHub"></img><span class="contact-media-label">GitHub</span></a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}