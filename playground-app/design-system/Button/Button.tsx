import React from "react";
import clsx from 'clsx'
import styles from './Button.module.scss'

type ButtonCategory = 'primary' | 'secondary';

type Props = {
  category?: ButtonCategory;
  caption: string;
  disabled?: boolean;
}

export function Button ({
  category = 'primary',
  caption = 'button',
  disabled = false,
}: Props) {

  return(
    <button
      type="button"
      disabled={disabled}
      className={clsx(
        styles.button,
        category === 'primary' && styles.primary,
        category === 'secondary' && styles.secondary
      )}
    >
      {caption}
    </button>
  );
} 