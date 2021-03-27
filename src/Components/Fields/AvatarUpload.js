import {Avatar, Button as MuiButton} from '@material-ui/core'
import {grey} from '@material-ui/core/colors'
import {
    CloudUpload as MuiCloudUpload,
    Delete as MuiDelete,
} from '@material-ui/icons'
import {spacing} from '@material-ui/system'
import React, {createRef, useState} from 'react'
import styled from 'styled-components'

/* -
----------------------------
|  Style components block  |
----------------------------
 */
const Button = styled(MuiButton)(spacing)
const UploadIcon = styled(MuiCloudUpload)(spacing)
const DeleteIcon = styled(MuiDelete)(spacing)

const CenteredContent = styled.div`
    text-align: center;
`

/* -
------------------------
|    Main component    |
------------------------
 */
const AvatarUpload = () => {
    const [image, _setImage] = useState(null)
    const inputFileRef = createRef(null)

    const cleanup = () => {
        URL.revokeObjectURL(image)
        inputFileRef.current.value = null
    }

    const setImage = (newImage) => {
        if (image) {
            cleanup()
        }
        _setImage(newImage)
    }

    const handleOnChange = (event) => {
        const newImage = event.target?.files?.[0]

        if (newImage) {
            setImage(URL.createObjectURL(newImage))
        }
    }

    /**
     *
     * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
     */
    const handleClick = (event) => {
        if (image) {
            event.preventDefault()
            setImage(null)
        }
    }

    return (
        <CenteredContent>
            <Avatar
                alt="Avatar"
                src={image}
                variant="square"
                style={{
                    width: '256px',
                    height: '256px',
                }}
            />
            <input
                ref={inputFileRef}
                accept="image/*"
                hidden
                id="avatar-image-upload"
                type="file"
                onChange={handleOnChange}
            />
            <label htmlFor="avatar-image-upload">
                <Button
                    variant="contained"
                    color="grey"
                    component="span"
                    mb={2}
                    onClick={handleClick}
                >
                    {image ? 'Очистити' : 'Завантажити'}
                </Button>
            </label>
        </CenteredContent>
    )
}

export default AvatarUpload
