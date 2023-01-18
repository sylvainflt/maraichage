<h1 class="text-center">Première Page ! {{ $name }}</h1>
        <ul class="ml-4">
            @foreach($articles as $article)
                <li>{{$article->title}}</li>
            @endforeach
        </ul>   