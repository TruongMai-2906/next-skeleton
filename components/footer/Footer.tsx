import styles from '../Footer/Footer.module.scss'

export interface FooterProps {

}

const Footer = (props: FooterProps) => {
  return (
    <div className={styles["root"]}>
      Footer
    </div>
  );
}

export default Footer;