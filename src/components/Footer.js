import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
    const statsState = useSelector(state => state.statsState)
    const dispatch = useDispatch();

    return (
        <div className="fixed-bottom pt-2 bg-primary">
            <div className="d-flex justify-content-center text-white">
                Copyright <AiOutlineCopyrightCircle />_From 2020-2021 Social Inc
            </div>
        </div>
    )
}

export default Footer;
