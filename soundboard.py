import pygame

pygame.init()
pygame.mixer.init(frequency=22050, size=-16, channels=2, buffer=4096)
screen = pygame.display.set_mode((750,750)#, pygame.FULLSCREEN, 16
    )
color = (0, 128, 255)
font=pygame.font.Font(None,30)
done = False
buttons = [[30,30,"Twee men", "twee-men"],[30,100,"Pak ze", "pak-ze"],[30,170,"Zo jammer", "zo-jammer"]#,[30,170,"Pang boem", "pang-boem"],[30,240,"Margriet", "margriet"],[30,310,"Badkamergesprekken", "badkamergesprekken"]
    ]
buttonWidth = 240
buttonHeight = 60

sounds = []

def initButtons():
    for index, button in enumerate(buttons):
        pygame.draw.rect(screen, color, pygame.Rect(button[0], button[1], buttonWidth, buttonHeight))
        buttonText=font.render(button[2], 1,(0,0,0))
        screen.blit(buttonText, (button[0]+15, button[1]+20))
        sounds.append(pygame.mixer.Sound('audio/'+button[3]+'.ogg'))

initButtons()

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
        elif event.type == pygame.MOUSEBUTTONDOWN:
            for index, button in enumerate(buttons):
                if event.pos[0] >= button[0] and event.pos[0] <= button[0]+buttonWidth and event.pos[1] >= button[1] and event.pos[1] <= button[1]+buttonHeight:
                    pygame.mixer.stop()
                    sounds[index].play(0)
        pygame.display.flip()
