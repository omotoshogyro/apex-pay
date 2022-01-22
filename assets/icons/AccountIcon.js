import React from 'react'
import Svg, {Path, Circle} from 'react-native-svg'
function AccountIcon({focused}) {
    if(focused){
        return (
            <Svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="21" cy="21" r="20" fill="#6FCF97" fill-opacity="0.4" stroke="#6FCF97" stroke-width="1.5"/>
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M26.294 16.2911C26.294 19.2281 23.9391 21.5831 21 21.5831C18.0619 21.5831 15.706 19.2281 15.706 16.2911C15.706 13.354 18.0619 11 21 11C23.9391 11 26.294 13.354 26.294 16.2911ZM21 31C16.6624 31 13 30.295 13 27.575C13 24.8539 16.6854 24.1739 21 24.1739C25.3386 24.1739 29 24.8789 29 27.599C29 30.32 25.3146 31 21 31Z" fill="#219653"/>
            </Svg>
        )
    }
    return (
        <Svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="21" cy="21" r="20" stroke="#6FCF97" stroke-width="1.5"/>
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M20.9847 24.3462C17.1171 24.3462 13.8142 24.931 13.8142 27.2729C13.8142 29.6148 17.0961 30.2205 20.9847 30.2205C24.8523 30.2205 28.1542 29.6348 28.1542 27.2938C28.1542 24.9529 24.8733 24.3462 20.9847 24.3462Z" stroke="#6FCF97" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M20.9846 21.0059C23.5227 21.0059 25.5799 18.9478 25.5799 16.4097C25.5799 13.8716 23.5227 11.8145 20.9846 11.8145C18.4465 11.8145 16.3885 13.8716 16.3885 16.4097C16.3799 18.9392 18.4237 20.9973 20.9523 21.0059H20.9846Z" stroke="#6FCF97" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}

export default AccountIcon