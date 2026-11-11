import qrcode

# 1. Define the data you want to embed (URL, text, etc.)
data = input("Website: ")

# 2. Configure the QR code settings
qr = qrcode.QRCode(
    version=1,  # Controls the size of the QR Code (1 is 21x21 matrix, up to 40)
    error_correction=qrcode.constants.ERROR_CORRECT_L,  # About 7% error correction
    box_size=10,  # Controls how many pixels each "box" of the QR code is
    border=4,  # Thickness of the border (minimum is 4)
)

# 3. Add data and compile the matrix
qr.add_data(data)
qr.make(fit=True)

# 4. Create the image with specific colors
# You can change fill_color and back_color (e.g., 'blue', 'white')
img = qr.make_image(fill_color="black", back_color="white")

# 5. Save the image to a file
img.save("my_qrcode.png")
print("QR Code generated successfully and saved as 'my_qrcode.png'!")
