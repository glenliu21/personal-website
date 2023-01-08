import React from 'react';
import linkedInIcon from "../../../assets/icons/contactMeIcons/linkedInIcon.svg"
import githubIcon from "../../../assets/icons/contactMeIcons/githubIcon.svg"
import mailIcon from "../../../assets/icons/contactMeIcons/emailIcon.svg"
import ContactItem from './ContactItem';

function ContactBar() {
    return (
        <div className="contact-bar">
            <ContactItem href="https://github.com/glenliu21" svg={githubIcon} alt="github-icon.svg" />
            <ContactItem href="https://www.linkedin.com/in/glenliu21/" svg={linkedInIcon} alt="linkedin-icon.svg" />
            <ContactItem href="mailto:glenliu@college.harvard.edu" svg={mailIcon} alt="mail-icon.svg" />
        </div>
    );
}

export default ContactBar;