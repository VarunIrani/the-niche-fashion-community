import i0 from '../assets/img/gallery/0.jpg'
import i1 from '../assets/img/gallery/1.jpg'
import i2 from '../assets/img/gallery/2.jpg'
import i3 from '../assets/img/gallery/3.jpg'
import i4 from '../assets/img/gallery/4.jpg'
import i5 from '../assets/img/gallery/5.jpg'
import i6 from '../assets/img/gallery/6.jpg'
import i7 from '../assets/img/gallery/7.jpg'
import i8 from '../assets/img/gallery/8.jpg'
import i9 from '../assets/img/gallery/9.jpg'
import i10 from '../assets/img/gallery/10.jpg'
import i11 from '../assets/img/gallery/11.jpg'
import i12 from '../assets/img/gallery/12.jpg'
import i13 from '../assets/img/gallery/13.jpg'
import i14 from '../assets/img/gallery/14.jpg'
import i15 from '../assets/img/gallery/15.jpg'
import i16 from '../assets/img/gallery/16.jpg'
import i17 from '../assets/img/gallery/17.jpg'
import i18 from '../assets/img/gallery/18.jpg'
import i19 from '../assets/img/gallery/19.jpg'
import i20 from '../assets/img/gallery/20.jpg'
import i21 from '../assets/img/gallery/21.jpg'
import i22 from '../assets/img/gallery/22.jpg'
import i23 from '../assets/img/gallery/23.jpg'
import i24 from '../assets/img/gallery/24.jpg'
import i25 from '../assets/img/gallery/25.jpg'
import i26 from '../assets/img/gallery/26.jpg'
import i27 from '../assets/img/gallery/27.jpg'
import i28 from '../assets/img/gallery/28.jpg'
import i29 from '../assets/img/gallery/29.jpg'

export const getGalleryImages = () => {
	return new Promise(resolve => {
		const images = [i0, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20, i21, i22, i23, i24, i25, i26, i27, i28, i29];

		let iTags = [];

		images.forEach((image, i) => {
			const img = document.createElement('img')
			img.src = image
			iTags.push(img);
		})

		const hImages = iTags.filter((i) => i.width > i.height)
		const vImages = iTags.filter((i) => i.width < i.height)

		let hFinalImages = [];
		let vFinalImages = [];

		hImages.forEach((image) => {
			hFinalImages.push(image.src)
		})

		vImages.forEach((image) => {
			vFinalImages.push(image.src)
		})

		const leftVertical = vFinalImages.filter((v, i) => i % 2 === 0)
		const rightVertical = vFinalImages.filter((v, i) => i % 2 !== 0)

		resolve({
			horizontalImages: hFinalImages,
			verticalImages: {
				leftVertical,
				rightVertical
			}
		});
	})
}
