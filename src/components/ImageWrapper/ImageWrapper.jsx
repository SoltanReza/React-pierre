const ImageWrapper = ({ url, height = '50%', ...props }) => (
    <div {...props}>
        <div className="position-relative" style={{ paddingTop: height, minHeight: '200px' }}>
            <img src={url} className="position-absolute start-0 top-0 w-100 h-100 object-fit-cover" />
        </div>
    </div>
)

export default ImageWrapper;