import { Controller, Get } from '@nestjs/common';

@Controller()
export class MockController {
  @Get('/collection')
  qcollection(): any[] {
    return [
      {
        title: 'parent 1',
        key: '0-0',
        children: [
          {
            title: 'parent 1-0',
            key: '0-0-0',
            children: [
              {
                title: 'leaf1',
                key: '0-0-0-0',
              },
              {
                title: 'leaf2',
                key: '0-0-0-1',
              },
            ],
          },
        ],
      },
    ];
  }
}
