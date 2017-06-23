import pygame

pygame.init()
screen = pygame.display.set_mode((750,750)#, pygame.FULLSCREEN, 16
    )
color = (0, 128, 255)
font=pygame.font.Font(None,30)
done = False
buttons = [[30,30,"Pak ze", "pak-ze.mp3"],[30,100,"Pang boem", "pang-boem.mp3"],[30,170,"Margriet", "margriet.mp3"],[30,240,"Badkamergesprekken", "badkamergesprekken.mp3"]]
buttonWidth = 180
buttonHeight = 60

sounds = []

def initButtons():
    for index, button in enumerate(buttons):
        pygame.draw.rect(screen, color, pygame.Rect(button[0], button[1], buttonWidth, buttonHeight))
        buttonText=font.render(button[2], 1,(0,0,0))
        screen.blit(buttonText, (button[0]+15, button[1]+20))
        sounds.append(pygame.mixer.Sound('audio/'+button[3]))

initButtons()

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
        elif event.type == pygame.MOUSEBUTTONDOWN:
            for index, button in enumerate(buttons):
                if event.pos[0] >= button[0] and event.pos[0] <= button[0]+buttonWidth and event.pos[1] >= button[1] and event.pos[1] <= button[1]+buttonHeight:
                    sounds[index].play()
        pygame.display.flip()
