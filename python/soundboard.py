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

projectRoot = dirname(dirname(abspath(__file__)))
font = pygame.font.Font(None,30)
buttonWidth = 120
buttonHeight = 130

sounds = []
done = False

def initButtons():
    imageNames = []
    for file in listdir(projectRoot+"/images/"):
        imageNames.append(file)

    loadedImages = {}
    for imageName in imageNames:
        loadedImage = pygame.image.load(projectRoot+"/images/"+imageName)
        loadedImages[imageName] = pygame.transform.scale(loadedImage, (buttonWidth,buttonHeight)).convert_alpha()

    tracks = []
    for file in listdir(projectRoot+"/audio/"):
        if file.endswith(".ogg"):
            author, track = file.split("_")
            tracks.append((author, track, file))

    for index, track in enumerate(tracks):
        x = 30 + (140*(index%3))
        y = 30 + (155*(index/3))

        screen.blit(loadedImages[track[0]+".jpg"], (x,y))

        buttonText=font.render(track[1].strip(".ogg"), 1,(255,255,255))
        screen.blit(buttonText, (x+15, y+20))

        sounds.append(pygame.mixer.Sound(projectRoot+"/audio/"+track[2]))

def checkButtonHit(pos):
    returnVal = -1
    for index, button in enumerate(sounds):
        x = 30 + (140*(index%3))
        y = 30 + (155*(index/3))
        if pos[0] >= x and pos[0] <= x+buttonWidth and pos[1] >= y and pos[1] <= y+buttonHeight:
            returnVal = index
    return returnVal

initButtons()

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
        elif event.type == pygame.MOUSEBUTTONDOWN:
            button = checkButtonHit(event.pos)
            if button != -1:
                pygame.mixer.stop()
                sounds[button].play()
        elif event.type == pygame.MOUSEMOTION:
            button = checkButtonHit(event.pos)
            if button != -1:
                print "got hovered"
        pygame.display.flip()
