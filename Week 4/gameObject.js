class gameObject{
    constructor(canvas)
    {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.vx = 3;
        this.vy = 3;
        this.color = "blue"
        this.canvas = canvas
    }
    renderRect()
    {ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }

    move()
        {this.x += this.vx;
        this.y += this.vy;  
        //bounce x
        
        if (this.x > this.canvas.width - 50)
        {
            this.vx *= -1
        }
    
        if(this.x < 50){
            this.vx *= -1
        }
    
        if (this.y < 50)
        {
            this.vy *= -1
        }
        
        if(this.y > this.canvas.height - 50)
        {
            this.vy *= -1
        }

    }
    //
    
   
}