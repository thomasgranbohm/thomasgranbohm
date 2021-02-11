import React, { HTMLAttributes, useEffect, useRef } from 'react'
import concatClasses from '../../functions/concatClasses'
import classes from './Icon.module.scss'
import { IconNames, Icons } from './IconContent'

export type IconProps = {
  name: IconNames
} & HTMLAttributes<SVGElement>

export const Icon: React.FC<IconProps> = ({ className, name, ...props }) => {
  const { content, fillColor } = Icons[name]
  const ref = useRef<SVGSVGElement>(null)

  // useEffect(() => {
  //   const rgb = fillColor
  //     .match(/.{1,2}/g)
  //     ?.map(hexPair => parseInt(hexPair, 16)) || [0, 0, 0]
  //   console.log(classes)
  //   if (rgb.reduce((a, b) => a + b, 0) / rgb.length <= 30)
  //     ref.current?.setAttribute(
  //       'fill',
  //       window.matchMedia('(prefers-color-scheme: dark)').matches
  //         ? classes.background
  //         : classes.text
  //     )
  //   else ref.current?.setAttribute('fill', `#${fillColor}`)
  // }, [fillColor, ref])

  return (
    <svg
      className={concatClasses(classes['icon'], [className, className])}
      fill={fillColor && `#${fillColor}`}
      ref={ref}
      viewBox='0 0 24 24'
      {...props}
    >
      {content}
    </svg>
  )
}
