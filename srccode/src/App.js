import React,{useState,useEffect} from 'react'

function App() {
  const [width,setWidth]=useState(window.innerWidth)
  const resize=()=>{
    setWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize",resize)
    return ()=>{
      window.removeEventListener("resize",resize)
    }
  })
  return (
    <div>
      <div className="top">
      {(width<1024)?<svg width="374" height="232" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="69.24%" x2="9.399%" y2="32.157%" id="a"><stop stop-color="#8A4389" stop-opacity="0" offset="0%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/></linearGradient></defs><path d="M0 232c25.63-53.065 74.118-86.618 145.464-100.66 107.018-21.062 66.506-42.306 119.083-84.466C299.6 18.767 336.083 3.143 374 0v232H0z" transform="rotate(180 187 116)" fill="url(#a)" fill-rule="evenodd" opacity=".05"/></svg>:<svg width="584" height="362" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="69.212%" x2="9.399%" y2="32.183%" id="a"><stop stop-color="#8A4389" stop-opacity="0" offset="0%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/></linearGradient></defs><path d="M0 362c40.022-82.8 115.736-135.154 227.141-157.064 167.108-32.864 103.85-66.012 185.949-131.796C467.823 29.284 524.793 4.904 584 0v362H0z" transform="rotate(180 292 181)" fill="url(#a)" fill-rule="evenodd" opacity=".05"/></svg>}
      </div>
      <div className="box">
      <div className="mid">
        <div className="row1">
        <div className="heading">
        <h1 className='title'>10,000+ of our users love our products.</h1>
        <p className='about'>We only provide great products combined with excellent customer service.See what our satisfied customers are saying about our services.</p>
        </div>
        <div className="ratings">
        <div className="rating1">
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <p className='rating'>Rated 5 Stars in Reviews</p>
        </div>
        <div className="rating2">
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <p className='rating'>Rated 5 Stars in Report Guru</p>
        </div>
        <div className="rating3">
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          <p className='rating'>Rated 5 Stars in BestTech</p>
        </div>
        </div>
        </div>
        <div className="customers">
          <div className="customer1">
            <div className="profile">
            <img src={require("./assets/image-colton.jpg")} alt="colton" className='img'  />
            <div className="text">
            <h2 className='name'>Colton Smith</h2>
            <p className='buyer'>Verified Buyer</p>
            </div>
            </div>
            <p className='review'>"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>

          </div>
          <div className="customer2">
            <div className="profile">
            <img src={require("./assets/image-irene.jpg")} alt="colton" className='img' />
            <div className="text">
            <h2 className='name'>Irene Roberts</h2>
            <p className='buyer'>Verified Buyer</p>
            </div>
            </div>
            <p className='review'>"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>

          </div>
          <div className="customer3">
            <div className="profile">
            <img src={require("./assets/image-anne.jpg")} alt="colton" className='img' />
            <div className="text">
            <h2 className='name'>Anne Williams</h2>
            <p className='buyer'>Verified Buyer</p>
            </div>
            </div>
            <p className='review'>"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>

          </div>
        </div>
      </div>
      </div>
      <div className="bottom">
      {(width<500)?<svg width="375" height="503" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="69.237%" x2="9.399%" y2="32.159%" id="a"><stop stop-color="#8A4389" stop-opacity="0" offset="0%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/></linearGradient></defs><path d="M-355 1530c74.356-153.934 215.022-251.268 422-292 310.466-61.099 192.94-122.724 345.47-245.025C514.157 911.442 620 866.116 730 857v673H-355z" transform="translate(0 -1027)" fill="url(#a)" fill-rule="evenodd" opacity=".05"/></svg>:<svg width="1085" height="673" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="69.237%" x2="9.399%" y2="32.159%" id="a"><stop stop-color="#8A4389" stop-opacity="0" offset="0%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/></linearGradient></defs><path d="M355 800c74.356-153.934 215.022-251.268 422-292 310.466-61.099 192.94-122.724 345.47-245.025C1224.157 181.442 1330 136.116 1440 127v673H355z" transform="translate(-355 -127)" fill="url(#a)" fill-rule="evenodd" opacity=".05"/></svg>}
      </div>
    </div>
  )
}

export default App