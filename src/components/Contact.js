import React from 'react'
import styled from 'styled-components'
const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Find us on Shopee and Lazada!</h3>
        <div className='content'>
        <div className='link-wrapper'>
        <a href="https://shopee.sg/shop/97323198" className="store-link">
            BESPOJKE SHOPEE!
          </a>
          </div>
          <div className='link-wrapper'>
          <a href="https://www.lazada.sg/shop/bespojke/?spm=a2o42.pdp_revamp.seller.1.795f4bb0CfRFaH&itemId=2726317478&channelSource=pdp" className="store-link">
            BESPOJKE LAZADA!
          </a>
          </div>
          <form className='contact-form'>
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: block;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }

  .link-wrapper {
    display: block; /* Set display to block for each link */
    margin-bottom: 2rem; /* Add margin to create spacing between links */
  }
  
  
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
