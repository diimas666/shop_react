import './send.css';
function Send() {
  return (
    <section className="contact">
      <div className="container">

        <div className="contact__wrapper">
          <h3 className="contact__title">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </h3>
          <div className="contact__desc">
            Type your email down below and be young wild generation
          </div>
          <div className="contact__input">
            <input type="text" placeholder='Add your email here' />
            <a className='btn-black contact__btn' href="#!">Send</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Send };
