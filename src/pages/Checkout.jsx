import "./checkout.css";
const Checkout = () => {
    const total = 99;
    let moms = Math.round(total * 0.12 * 100) / 100;
    let subtotal = total - moms;
    return (
        <div className="checkout">
            <div className="receipt">
                {/* tackför din beställning */}
                <h2>Ditt Ordernummer: 99</h2>
                <div className="items">
                    <div className="items-header">
                        <p>Beställning</p>
                        <p>Antal</p>
                        <p>Pris</p>
                    </div>
                    {/* en komponent elller ba map eller nåt ist*/}
                    <div className="item">
                        <p>Vitlökspasta</p>
                        <p>77</p>
                        <p>89.90</p>
                    </div>
                </div>
                <div className="total">
                    <div>
                        <p>subtotal: {subtotal}kr</p>
                        <p>moms: {moms}kr</p>
                    </div>
                    <h3>Total: 99kr</h3>
                </div>
                <button>gå tillbaka</button>
            </div>
        </div>
    );
};

export default Checkout;
