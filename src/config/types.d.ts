export type InputType = {
    type: string,
    placeholder :! string,
    size: string
    onChange?:(val: string) => void;
}

export type ButtonType = {
    type: string,
    text: string,
    onClick?: () => void
}

export type NotificationItemProps = {
    text?: string,
    key?: string,
    onClick?: () => void
};

export type SelectProps = {
  options: Array,
  size: string
}

export type OptionProps = {
  key: string,
  value: string
}

export type TestimonialCardProps = {
  name:string,
  designation: string,
  testimonial: string,
  active: boolean
}
