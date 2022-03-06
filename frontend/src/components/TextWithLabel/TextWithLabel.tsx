import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import * as styles from './TextWithLabelStyles';

interface TextWithLabelProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    text: string;
    label: string;
    labelPosition?: 'top' | 'bottom';
    labelProps?: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
}

const TextWithLabel: FC<TextWithLabelProps> = props => {
    const { text, label, style, labelPosition = 'top', labelProps, ...rest } = props;
    return (
        <span {...rest} style={{ ...style, position: 'relative' }}>
            <span css={[styles.label(labelPosition), labelProps?.css]} {...labelProps}>
                {label}
            </span>
            {text}
        </span>
    );
};

export default TextWithLabel;
