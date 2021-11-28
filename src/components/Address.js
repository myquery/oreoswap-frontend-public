import copy from '../Assets/copy.svg'
const Address = () => {
    return ( 
        <section className="address">
            <p> Oreoswap presale wallet address: <strong> <br /> 0x026154e66E0b7Ebf8d5bF82FcddcA4059715abDF </strong><img onClick={() => navigator.clipboard.writeText('0x026154e66E0b7Ebf8d5bF82FcddcA4059715abDF')} src={copy} alt="copy address" className="copy-icon" /></p>
        </section>
     );
}
 
export default Address;