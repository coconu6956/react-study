import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp from '../07/AdvReduxApp01';

storiesOf('ReduxApp', module)
    .add('리덕스 예제', () => <ReduxApp></ReduxApp>);