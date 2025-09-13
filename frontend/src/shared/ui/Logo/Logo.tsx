import styles from './Logo.module.scss'

interface ILogoProps {
  className?: string;
}
  
export const Logo = ({ className }: ILogoProps) => {
  return (
    <h1 className={`${styles.logo} ${className ? className : ""}`}>DudeShape</h1>
  );
}