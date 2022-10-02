import './label.css'

interface Props{
    /**
     * Label recibe un arg de tipo string
     */
    label: string;

    /**
     * Recibe una clase de css que determina el tamaño
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Covierte el texto del label a mayuscula
     */

    allCaps?: boolean;

    /**
     * Cambiar el color del texto
     */
    color: 'text-primary' | 'text-secondary' | 'text-tertiary'


    /**
     * Modificar libremente el color del texto
     */
    fontColor?: string;
}

/**
 * Ejemplo de un componente 
 * 
 */

export const Label = ({label = 'No Label', size = 'normal', allCaps, color = 'text-primary', fontColor}: Props) => {
  return (
    <span className={`label ${color} ${size}`} style={{color: fontColor}}>{allCaps ? label.toUpperCase(): label}</span>
  )
}
