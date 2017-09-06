# Yarno Boelens
# Soundboard soundboard.py
# created on: 24-06-2017

import pygame
from os.path import dirname, abspath
from os import listdir

pygame.init()
pygame.mixer.init(frequency=22050, size=-16, channels=2, buffer=4096)
screen = pygame.display.set_mode((750,750)#, pygame.FULLSCREEN, 16
    )

font=pygame.font.Font(None,30)

tracks = []
for file in listdir(dirname(dirname(abspath(__file__)))+"/audio/"):
    if file.endswith(".ogg"):
        tracks.append(file)

imageNames = []
for file in listdir(dirname(dirname(abspath(__file__)))+"/images/"):
    imageNames.append(file)

buttonWidth = 120
buttonHeight = 130

sounds = []
done = False

def initButtons():
    loadedImages = {}
    for imageName in imageNames:
        loadedImage = pygame.image.load(dirname(dirname(abspath(__file__)))+"/images/"+imageName)
        loadedImages[imageName] = pygame.transform.scale(loadedImage, (buttonWidth,buttonHeight)).convert_alpha()

    for index, track in enumerate(tracks):
        x = 30 + (140*(index%3))
        y = 30 + (155*(index/3))

        screen.blit(loadedImages["flokkie.jpg"], (x,y))

        buttonText=font.render(track.strip(".ogg"), 1,(255,255,255))
        screen.blit(buttonText, (x+15, y+20))

        sounds.append(pygame.mixer.Sound(dirname(dirname(abspath(__file__)))+"/audio/"+track))

initButtons()

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
        elif event.type == pygame.MOUSEBUTTONDOWN:
            for index, button in enumerate(tracks):
                x = 30 + (140*(index%3))
                y = 30 + (155*(index/3))
                if event.pos[0] >= x and event.pos[0] <= x+buttonWidth and event.pos[1] >= y and event.pos[1] <= y+buttonHeight:
                    pygame.mixer.stop()
                    sounds[index].play()
        elif event.type == pygame.MOUSEMOTION:
            for index, button in enumerate(tracks):
                x = 30 + (140*(index%3))
                y = 30 + (155*(index/3))
                if event.pos[0] >= x and event.pos[0] <= x+buttonWidth and event.pos[1] >= y and event.pos[1] <= y+buttonHeight:
                    print "got hovered"
        pygame.display.flip()
