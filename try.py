# from skimage import io, measure

# # Load the two images
# img1 = io.imread("image1.jpg")
# img2 = io.imread("image2.jpg")

# # Compute the SSIM score
# score = measure.compare_ssim(img1, img2, multichannel=True)

# # Print the similarity score
# print("Similarity score: {:.2f}%".format(score * 100))
from skimage import io
from sewar.full_ref import ssim
img1 = io.imread("image1.jpg")
img2 = io.imread("image2.jpg")
score = ssim(img1, img2)
print(score)
