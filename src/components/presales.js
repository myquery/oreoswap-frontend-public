import "../css/local/partials/components/_presales.css"

const Presales = () => {
    return ( 
        <section className="presales text-center"> 
            <div className="wrapper">
                <h2 className="justified">Guides on how to fill private sale form</h2>
                <ul className=" list-group">
                    <li className="list-group-item">Send the contributing amount to the private sale address below</li>
                    <li className="list-group-item">Copy the transaction link </li>
                    <li className="list-group-item">Fill the form and supply all details needed in it</li>
                    <li className="list-group-item">Submit</li>
                </ul>
                
                <p>Still have issues with this?</p>
                <p>Feel free to ask in the <a href="https://t.me/OreoSwapOfficial" target="_newtab">telegram channel</a></p>
                <strong>Note: all funds are to be sent to only this address</strong>
            </div>
            
        </section>
     );
}
 
export default Presales;