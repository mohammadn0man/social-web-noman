import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="fixed-bottom pt-2 bg-primary">
            <div className="d-flex justify-content-center text-white">
                Copyright <AiOutlineCopyrightCircle />_From 2020-2021 Social Inc
            </div>
        </div>
    )
}

export default Footer;
