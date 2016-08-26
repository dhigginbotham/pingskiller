# PingSkiller
Sign your friend up for the pingskills newsletter, this is really just a joke -- so please don't abuse this any further than your coworkers who need some help at pingpong.

Use as a node module: `npm i --save pingskiller`

_or_ clone the repo: 
```sh
git clone git+ssh://git@github.com/dhigginbotham/pingskiller.git && \
cd pingskiller/ && \
npm i && \
chmod +x bin/pingskiller && \
bin/pingskiller -h
```

```sh
Usage: bin/pingskiller [options]

Options:
  --firstname, -f  first name of friend                               [required]
  --lastname, -l   last name of friend                                [required]
  --email, -e      email of friend                                    [required]
  --help, -h       Show help                                           [boolean]

Examples:
  bin/pingskiller -f Ricky -l Bobby -e rbobby@edify.com
```

----

Made with &hearts;
