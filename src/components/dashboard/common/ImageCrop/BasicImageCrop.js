import React, { useState, useRef, useEffect } from 'react'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/src/ReactCrop.scss';
import { canvasPreview } from './CroppedImageCanvas';
import IconButton from '../../../core/form/IconButton';
import { icons } from '../../../../constants';
import Button from '../../../core/form/Button';
import functions from '../../../../utils/Functions';

const BasicImageCrop = ({ url, file, concludeCrop }) => {

    const imgRef = useRef(null);
    const [crop, setCrop] = useState(null);
    const [completedCrop, setCompletedCrop] = useState(null);
    const [rotation, setRotation] = useState(0);
    const [scale, setScale] = useState(1);
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const imageUrl = url;
    const [croppedPreviewImage, setCroppedPreviewImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);

    const onImageLoad = (e) => {
        setHeight(e?.currentTarget.height);
        setWidth(e?.currentTarget.width);
        setCompletedCrop({
            x: 0,
            y: 0,
            height: e?.currentTarget.height,
            width: e?.currentTarget.width,
            unit: 'px'
        });
    }

    const onZoom = (e) => {
        setScale(parseFloat(e));
    };
    
    const rotateRight = () => {
        let newRotation = rotation - 90;
        if (newRotation >= 360) {
            newRotation = -360;
        }
        setRotation(newRotation);
    };
    
    const rotateLeft = () => {
        let newRotation = rotation + 90;
        if (newRotation >= 360) {
            newRotation = -360;
        }
        setRotation(newRotation);
    };

    const handleCropComplete = (e) => {
        if (e?.height == 0 || e?.width == 0) {
            setCompletedCrop({
                x: 0,
                y: 0,
                height: height,
                width: width,
                unit: 'px'
            });
        } 
        else {
            setCompletedCrop(e);
        }
    }
    
    const download = async () => {
        const croppedCanvas = await canvasPreview(imgRef.current, completedCrop, scale, rotation);
        setCroppedPreviewImage(croppedCanvas.toDataURL(file.file.type));
        const converted_cropped_image = functions.convertBase64ToFile(croppedCanvas.toDataURL(file.file.type), file.file.name);
        setCroppedImage(converted_cropped_image);
    };

    const closeCropHandler = () => {
        concludeCrop({
            status: false
        });
    }

    useEffect(() => {
        if(croppedImage != null){
            concludeCrop({
                status: true,
                file: croppedImage,
                preview: croppedPreviewImage
            })
        }
    }, [croppedImage]);

    return (
        <>
            <div className="cmsDashboardPopUpContentCropImage" onWheel={(e) => {
                if (e.deltaY > 0) {
                    setScale(scale + 0.1);
                } 
                else if (e.deltaY < 0 && scale > 0.1) {
                    if(scale > 1){
                        setScale(scale - 0.1);
                    }
                }
            }}>
                <ReactCrop 
                    src={imageUrl}
                    crop={crop}
                    onChange={(_, percentCrop) => {
                        setCrop(percentCrop);
                    }}
                    onComplete={(e) => handleCropComplete(e)}
                >
                    <img ref={imgRef} src={imageUrl} crossOrigin='anonymous' className="cmsDashboardPopUpContentCropImg" onLoad={(e) => onImageLoad(e)} style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }} />
                </ReactCrop>
            </div>
            
            <div className="cmsDashboardPopUpContentCropOptions">
                <div className="cmsDashboardPopUpContentCropOptionsInner">
                    <div className="cmsDashboardPopUpContentCropOptionRotate">
                        <IconButton bg='dashboard' icon={icons.rotateLeft} action={rotateLeft} />
                        <IconButton bg='dashboard' icon={icons.rotateRight} action={rotateRight} />
                    </div>
                    <div className="cmsDashboardPopUpContentCropOptionSlider">
                        <div className="cmsDashboardPopUpContentCropOptionSliderInput">
                            <input type='range' min={1} max={3} step={0.05} value={scale} onInput={(e) => { onZoom(e.target.value); }} className="cmsDashboardPopUpContentCropOptionSliderInputTxt" />
                        </div>
                        <div className="cmsDashboardPopUpContentCropOptionSliderLable">
                            <p className="cmsDashboardPopUpContentCropOptionSliderLableTxt">Zoom In/Out</p>
                        </div>
                    </div>
                    <div className="cmsDashboardPopUpContentCropDownloadCancel">
                        <Button hasIcon={true} icon={icons.tick} iconPosition='left' action={download} width='auto' bg='dashboard'>Submit</Button>
                        <Button hasIcon={true} icon={icons.wrong} iconPosition='left' action={closeCropHandler} width='auto' bg='error'>Cancel</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicImageCrop