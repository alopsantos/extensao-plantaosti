import os

from PIL import Image

endereco = input("Informe o endereço completo da pasta onde esta as fotos: ")

caminho = r"C:\\Users\\SuporteES\\Downloads\\subir-farm\\" + endereco

lista_fotos = os.listdir(caminho)

for foto in lista_fotos:
  nome, extensao = os.path.splitext(foto)
  if extensao == ".webp":
    im = Image.open(caminho+ "\\" + foto).convert("RGB")
    im.save(f"{caminho}\{nome}.jpg", "jpeg")
    print(foto)


# Em teoria, basta inverter os formatos na linha save
# Converter PNG to JPG
# im = Image.open("test.png").convert("RGB")
# im.save("test.jpg", "jpeg")

# Converter JPG to PNG
# im = Image.open("test.jpg").convert("RGB")
# im.save("test.png", "png")

# Converter JPG to WEBP
# im = Image.open("test.jpg").convert("RGB")
# im.save("test.jpg", "webp")
