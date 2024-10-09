import { Container, Row, Col } from "./Grid"
import img from '../assets/img/meet-img.png'
import title from '../assets/img/meet-toro.png'

export default function Meet() {
    return (
        <div className='meet'>
            <Container>
                <Col xs={12}>
                    <div className="meet-wrap lg:flex gap-7">
                        <div className="meet-content">
                            <div className="title">
                                <img src={title} className="mx-auto" alt="" />
                            </div>
                            <div className="box">
                                <p>Toro Inoue, also known as the Sony Cat, is an iconic character from the Doko Demo Issyo series and the unofficial mascot of Sony Interactive Entertainment in Japan. Known for his quirky personality, Toro has captured the hearts of many with his wide range of expressions, love of dressing in costumes, and relentless pursuit to become human. With a rich history spanning games, shows, and appearances, Toro is now making his boldest move yet—diving into the wild world of meme coins.</p>
                                <p>This famous white bobtailed cat, who has tried everything from learning human words to hosting news programs, has one goal in mind: to become human. But now, Toro is entering a new chapter, embracing the chaotic and unpredictable realm of meme culture. Will this final venture, marked by degenerate antics and high-stakes gambling, finally fulfill his dream of becoming one of us? Only time will tell.</p>
                            </div>
                        </div>
                        <div className="meet-img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </Col>
            </Container>
        </div>
    )
}
