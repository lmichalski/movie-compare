import React from 'react'
import './CollageImage.scss'

type Props = { url: string; size: number }

export const CollageImage: React.FC<Props> = ({ url, size }) => {
	return (
		<img src={url} className="pokemon__collage--img" alt={url} style={{ width: '30vw;' }}></img>
	)
}
