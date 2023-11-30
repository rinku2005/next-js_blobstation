import styles from "./styles/style.module.css";
import ImagPage from "./images";
import OurServices from "./our_service/page";
import Footer from "./footer/page";
import Tailored from "./tailored/Tailored";


export default function Home() {
  return (
    <>
  
      <div className={styles.hero_container}>
        <div className={styles.hero_main}>
          <div className={styles.hero_left}>
            <div >
                        <h1 className=  {styles.hero_left_h1} >Your Trusted Software Development Partner</h1>
                        <p className={styles.hero_left_p}>Building technology solutions for industry leaders <br/> and consistently delivering
                            unsurpassed
                            results</p>
                        <div className={styles.btn_box} >
                            <button className={styles.book_btn}>Book a free consulation</button>
                            <button  className={styles.read_btn}>Read more abhout us</button>
                        </div>

                    </div>
                    <div className={styles.team}>
                        <p>Trusted by the teams at: </p>
                        <ul>
                            <li><a href="#"> <img className={styles.img_fluid} src="/images/blob.jpg"/></a> </li>
                            <li><a href="#"><img className={styles.img_fluid} src="images/  "/></a></li>
                            <li><a href="#"><img className={styles.img_fluid} src="images/banner-img3.svg"/></a></li>
                            <li><a href="#"><img className={styles.img_fluid}src="images/banner-img4.svg"/></a></li>
                        </ul>
                    </div>
          </div>

          <div className={styles.hero_right}></div>
        </div>
      </div>

      <div>
        
      </div>
 
  <OurServices />
  <Tailored />

  <Footer/>

    </>
  );
}


