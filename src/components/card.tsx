import { Card, CardFooter, Image, Button } from '@heroui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CardChoice(props: {
  pathToImage: string;
  pathToNavigate: string;
  buttonText: string;
}) {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Card
      className="border-none"
      radius="lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      isFooterBlurred={isHovering}
    >
      <Image
        className="object-cover"
        height={200}
        src={props.pathToImage}
        width={300}
      />
      <CardFooter className="before:bg-white/10 border-white/20 overflow-hidden absolute before:rounded-xl rounded-large w-full shadow-small z-10 h-full justify-center">
        {isHovering ? (
          <Button
            className="text-white"
            color="primary"
            radius="lg"
            size="lg"
            variant="solid"
            onPress={() => navigate(props.pathToNavigate)}
          >
            {props.buttonText}
          </Button>
        ) : (
          ''
        )}
      </CardFooter>
    </Card>
  );
}

export default CardChoice;
