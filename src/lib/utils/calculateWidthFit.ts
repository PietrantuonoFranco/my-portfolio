export default function calculateWidthFit(srcWidth: number, srcHeight: number,  maxHeight: number) {
    const ratio = maxHeight / srcHeight;
  
    const newWidth = srcWidth * ratio;
  
    return newWidth;
}