import sys
from rembg import remove
from PIL import Image, ImageEnhance
import os

input_path = "C:\\Users\\NEVIL\\Downloads\\SAVE_20260317_211915.jpg.jpeg"
output_path = "profile.png"

def process_image():
    if not os.path.exists(input_path):
        print(f"Error: input image {input_path} not found.")
        sys.exit(1)

    print("Opening image...")
    img = Image.open(input_path)
    
    print("Enhancing vibrance...")
    # Increase color saturation
    enhancer_color = ImageEnhance.Color(img)
    img = enhancer_color.enhance(1.4)
    
    # Increase contrast slightly
    enhancer_contrast = ImageEnhance.Contrast(img)
    img = enhancer_contrast.enhance(1.1)

    print("Removing background...")
    # remove background, this requires rembg
    output = remove(img)
    
    output.save(output_path)
    print(f"Success: saved to {output_path}")

if __name__ == "__main__":
    process_image()
