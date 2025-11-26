import { tv } from 'tailwind-variants'

export const imageFilePreviewVariants = tv({
  base: 'rounded-lg overflow-hidden',
})

interface ImageFilePeeviewProps extends React.ComponentProps<'img'> {
  imageClassName?: string
}

export const imageFilePreviewImageVariants = tv({
  base: 'w-full h-full object-cover',
})

export default function ImageFilePreview({
  className,
  imageClassName,
  ...props
}: ImageFilePeeviewProps) {
  return (
    <div className={imageFilePreviewVariants({ className })}>
      <img
        className={imageFilePreviewImageVariants({ className: imageClassName })}
        {...props}
        alt=""
      />
    </div>
  )
}
