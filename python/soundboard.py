# Yarno Boelens
# Soundboard soundboard.py
# created on: 24-06-2017

import pygame
from os.path import dirname, abspath

pygame.init()
pygame.mixer.init(frequency=22050, size=-16, channels=2, buffer=4096)
screen = pygame.display.set_mode((750,750)#, pygame.FULLSCREEN, 16
    )

font=pygame.font.Font(None,30)

buttons = [
    ["pak-ze","Pak ze","flokkie"],
    ["koekoek","Koekoek","flokkie"],
    ["twee-men","Twee men","flokkie"],
    ["verkeerde-knopje","Verkeerde knopje","flokkie"],
    ["wtf-ricardo","WTF Ricardo?!","flokkie"],
    ["jaja","Jaja ja","flokkie"],
    ["hey-klootzak","Hey! Klootzak!","jos"],
    ["kutkutkut","Kutkutkut","jelle"],
    ["zo-jammer","Zo jammer","yarno"]#,
    #["Pang boem", "pang-boem"],
    #["Margriet", "margriet"],
    #["Badkamergesprekken", "badkamergesprekken"]
]

imageNames = [
    "flokkie",
    "jos",
    "jelle",
    "yarno"
]

buttonWidth = 120
buttonHeight = 130

sounds = []
images = {}
done = False

def initButtons():
    for imageName in imageNames:
        image = pygame.image.load(dirname(dirname(abspath(__file__)))+"/images/"+imageName+".jpg")
        images[imageName] = pygame.transform.scale(image, (buttonWidth,buttonHeight)).convert_alpha()

    for index, button in enumerate(buttons):
        x = 30 + (140*(index%3))
        y = 30 + (155*(index/3))

        screen.blit(images[button[2]], (x,y))

        buttonText=font.render(button[1], 1,(255,255,255))
        screen.blit(buttonText, (x+15, y+20))

        sounds.append(pygame.mixer.Sound(dirname(dirname(abspath(__file__)))+"/audio/"+button[0]+".ogg"))

initButtons()

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
        elif event.type == pygame.MOUSEBUTTONDOWN:
            for index, button in enumerate(buttons):
                x = 30 + (140*(index%3))
                y = 30 + (155*(index/3))
                if event.pos[0] >= x and event.pos[0] <= x+buttonWidth and event.pos[1] >= y and event.pos[1] <= y+buttonHeight:
                    pygame.mixer.stop()
                    sounds[index].play()
        elif event.type == pygame.MOUSEMOTION:
            for index, button in enumerate(buttons):
                x = 30 + (140*(index%3))
                y = 30 + (155*(index/3))
                if event.pos[0] >= x and event.pos[0] <= x+buttonWidth and event.pos[1] >= y and event.pos[1] <= y+buttonHeight:
                    print "got hovered"
        pygame.display.flip()
