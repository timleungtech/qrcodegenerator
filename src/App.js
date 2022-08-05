import './App.css'
import BasicInput from './ui/basic-input'
import { useState } from 'react'
import QRCode from 'qrcode'
import LiveQrCode from './components/live-qr-code'

function App(){ 
    const [qrText, setQrText] = useState ("")
    const [qrCode, setQrCode] = useState ("")
    
    const generateQrCode = () => {
        QRCode.toDataURL(qrText, {
            width: 900,
            margin: 3,
        }, (err, url) => {
            if (err) return console.log(err)
            setQrCode(url)
        })
    }
                
    const handleQrCode = (e) => {
        setQrText(e.target.value)
        generateQrCode()
    }

    return (
        <div className='App'>
            <h1>QR Code Generator</h1>
            <LiveQrCode value={qrText} />
            <BasicInput
                label='Type URL below'
                type='text'
                value={qrText}
                onChange={handleQrCode}
                style={{marginTop: 20}}
            />
            <br />
            <a href={qrCode} download={`${qrText}.png`}>Download QR Code as PNG</a>
        </div>
    )
}

export default App