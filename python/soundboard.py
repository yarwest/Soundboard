import pygame
from os.path import dirname, abspath

pygame.init()
pygame.mixer.init(frequency=22050, size=-16, channels=2, buffer=4096)
screen = pygame.display.set_mode((750,750)#, pygame.FULLSCREEN, 16
    )
color = (0, 128, 255)
font=pygame.font.Font(None,30)
done = False
buttons = [
        ["Twee men", "twee-men"],
        ["Pak ze", "pak-ze"],
        ["Zo jammer", "zo-jammer"]#,
        #["Pang boem", "pang-boem"],
        #["Margriet", "margriet"],
        #["Badkamergesprekken", "badkamergesprekken"]
    ]
buttonWidth = 240
buttonHeight = 60

sounds = []

def initButtons():
    x = 30
    for index, button in enumerate(buttons):
        y = 30 + (70*index)
        pygame.draw.rect(screen, color, pygame.Rect(x, y, buttonWidth, buttonHeight))
        buttonText=font.render(button[0], 1,(0,0,0))
        screen.blit(buttonText, (x+15, y+20))
        sounds.append(pygame.mixer.Sound(dirname(dirname(abspath(__file__)))+'/audio/'+button[1]+'.ogg'))

initButtons()

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
        elif event.type == pygame.MOUSEBUTTONDOWN:
            x = 30
            for index, button in enumerate(buttons):
                y = 30 + (70*index)
                if event.pos[0] >= x and event.pos[0] <= x+buttonWidth and event.pos[1] >= y and event.pos[1] <= y+buttonHeight:
                    pygame.mixer.stop()
                    sounds[index].play()
        pygame.display.flip()
