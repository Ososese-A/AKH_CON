import '../styles/payment.css';

const PaymentBox = () => {
    return ( 
        <>
    <div className='con-holder'>
    <h1 className='con-holder-title'>PAYMENT</h1>
        <div class="fullpayment">
          <h2 className='pay-title'>FULL PAYMENT</h2>
          <p class="pay-txt">
            Full payment at the time of signing the <br />
            contract attracts a discount of 5%.
          </p>
          <div class="pay-txt">
            <p>
              Full Price: ₦ 180 000 000 <br /> (Without discount)
              <br />
              Full Price: ₦ 150 000 000 <br /> (With discount)
            </p>
          </div>
          <div className='pay-btn-box'>
              <button class="b-btn">SIGN & PAY ONLINE</button>
              <button class="w-btn">SIGN & PAY IN PERSON</button>
          </div>
        </div>


        
        <div class="instalmentalpayment">
          <h2 className='pay-title'>INSTALMENTAL PAYMENT</h2>
          <p>
            Installmental payment to be completed <br /> over a period of 18 months. <br />
            Starting wit an initial payment of 25%
          </p>
          <div class="pay-txt">
            <p>
              Full Price: ₦ 180 000 000
              <br />
              Initial 25% Payment Price ₦ 45 000 000
            </p>
          </div>
          <div class="pay-btn-box">
              <button className='b-btn'>SIGN & PAY ONLINE</button>
              <button className='w-btn'>SIGN & PAY IN PERSON</button>
          </div>
        </div>
    </div>
        </>
     );
}
 
export default PaymentBox;