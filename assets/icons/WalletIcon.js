import React from 'react'
import Svg, {Path} from 'react-native-svg'
function WalletIcon({focused}) {
    if(focused){
        return (
            <Svg width="22" height="20" viewBox="0 0 22 20" fill="#219653" xmlns="http://www.w3.org/2000/svg">
                <Path d="M20.6389 12.3957H16.5906C15.1042 12.3948 13.8993 11.1909 13.8984 9.70446C13.8984 8.21801 15.1042 7.01409 16.5906 7.01318H20.6389" stroke="#6FCF97" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M17.049 9.64294H16.7373" stroke="#6FCF97" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.74766 1H15.3911C18.2892 1 20.6388 3.34951 20.6388 6.24766V13.4247C20.6388 16.3229 18.2892 18.6724 15.3911 18.6724H6.74766C3.84951 18.6724 1.5 16.3229 1.5 13.4247V6.24766C1.5 3.34951 3.84951 1 6.74766 1Z" stroke="#6FCF97" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path opacity="0.4" d="M6.03516 5.5382H11.4341" stroke="#6FCF97" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
            )
    }
    return (
        <Svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M20.6389 12.3957H16.5906C15.1042 12.3948 13.8993 11.1909 13.8984 9.70446C13.8984 8.21801 15.1042 7.01409 16.5906 7.01318H20.6389" stroke="#6FCF97" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M17.049 9.64294H16.7373" stroke="#6FCF97" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.74766 1H15.3911C18.2892 1 20.6388 3.34951 20.6388 6.24766V13.4247C20.6388 16.3229 18.2892 18.6724 15.3911 18.6724H6.74766C3.84951 18.6724 1.5 16.3229 1.5 13.4247V6.24766C1.5 3.34951 3.84951 1 6.74766 1Z" stroke="#6FCF97" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path opacity="0.4" d="M6.03516 5.5382H11.4341" stroke="#6FCF97" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}

export default WalletIcon